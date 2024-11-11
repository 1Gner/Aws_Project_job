FROM openjdk:17-alpine
COPY Job/target/*.jar Backend_docker.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "Backend_docker.jar"]