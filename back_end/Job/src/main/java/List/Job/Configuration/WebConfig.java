package List.Job.Configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*","http://3.147.126.24","http://3.147.126.24:80") // Permite requisições de qualquer domínio
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Permite todos os métodos HTTP necessários
                .allowedHeaders("*"); // Permite todos os cabeçalhos
                // Permite envio de credenciais (cookies, etc.) se necessário
    }
}