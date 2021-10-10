# specify k8s config
k8s_yaml('./k8s/front.yml')

# run app
k8s_resource('bitbuyer-front', port_forwards=8080)

docker_build('user632716/bitbuyer-front:latest', '.', dockerfile='./docker/Dockerfile-bitbuyer-front',
  live_update=[
    # when package.json changes, we need to do a full build
    fall_back_on(['package.json', 'package-lock.json']),
    # Map the local source code into the container under /src
    sync('.', '/app'),
  ])
