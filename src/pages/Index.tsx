import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const combines = [
  {
    id: 1,
    name: "John Deere S790",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/e632b295-ab22-4144-9a1d-0368a3d01e40.jpg",
    price: "18 500 000 ₽",
    power: "473 л.с.",
    capacity: "42 000 л/час",
    tank: "14 100 л",
    width: "10.7 м",
    featured: true,
  },
  {
    id: 2,
    name: "Case IH Axial-Flow 9250",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/c72b3968-44e1-4917-b14f-63dc5e848a10.jpg",
    price: "17 800 000 ₽",
    power: "543 л.с.",
    capacity: "40 500 л/час",
    tank: "14 500 л",
    width: "12.2 м",
    featured: false,
  },
  {
    id: 3,
    name: "Fendt IDEAL 10T",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/b1221507-90c7-45e3-8cea-814a42ea8dba.jpg",
    price: "19 200 000 ₽",
    power: "517 л.с.",
    capacity: "43 000 л/час",
    tank: "13 800 л",
    width: "10.8 м",
    featured: false,
  },
  {
    id: 4,
    name: "New Holland CR11.90",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/7873dc6e-c2a8-4e3a-8c55-fe099c04910b.jpg",
    price: "18 900 000 ₽",
    power: "653 л.с.",
    capacity: "44 000 л/час",
    tank: "15 100 л",
    width: "13.7 м",
    featured: true,
  },
  {
    id: 5,
    name: "Claas Lexion 8900",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/a4f8f0ed-468a-4d68-8435-98a27e3ac511.jpg",
    price: "20 500 000 ₽",
    power: "790 л.с.",
    capacity: "45 000 л/час",
    tank: "18 000 л",
    width: "12.0 м",
    featured: true,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <Icon name="Tractor" size={32} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ТОП-5 КОМБАЙНОВ
                </h1>
                <p className="text-sm text-muted-foreground">Крупнейшие агрегаты мира</p>
              </div>
            </div>
            <Button variant="default" size="lg" className="gap-2">
              <Icon name="Phone" size={18} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            <Icon name="TrendingUp" size={16} className="mr-2" />
            Каталог 2025
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Самые мощные комбайны планеты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Передовые технологии уборки урожая. Максимальная производительность и надежность для крупных агропредприятий
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {combines.map((combine) => (
            <Card key={combine.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 group">
              <div className="relative overflow-hidden">
                {combine.featured && (
                  <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground border-0">
                    <Icon name="Star" size={14} className="mr-1" />
                    ХИТ
                  </Badge>
                )}
                <img
                  src={combine.image}
                  alt={combine.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-2xl">{combine.name}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-3xl font-bold text-primary mt-2">
                  <Icon name="Tag" size={24} />
                  {combine.price}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                    <Icon name="Zap" size={20} className="text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Мощность</p>
                      <p className="font-semibold">{combine.power}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                    <Icon name="Gauge" size={20} className="text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Производ.</p>
                      <p className="font-semibold">{combine.capacity}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                    <Icon name="Droplet" size={20} className="text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Бункер</p>
                      <p className="font-semibold">{combine.tank}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                    <Icon name="Ruler" size={20} className="text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Жатка</p>
                      <p className="font-semibold">{combine.width}</p>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button className="flex-1 gap-2 h-12 text-base" size="lg">
                  <Icon name="ShoppingCart" size={20} />
                  Оформить заказ
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-4">
                  <Icon name="Info" size={20} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Нужна консультация?</h3>
          <p className="text-white/90 mb-6 text-lg">
            Наши специалисты помогут подобрать оптимальную технику для вашего предприятия
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" className="gap-2 h-12 px-8">
              <Icon name="Phone" size={20} />
              Позвонить сейчас
            </Button>
            <Button variant="outline" size="lg" className="gap-2 h-12 px-8 bg-white hover:bg-white/90">
              <Icon name="Mail" size={20} />
              Написать email
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t mt-20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <Icon name="Tractor" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold">ТОП-5 КОМБАЙНОВ</p>
                <p className="text-sm text-muted-foreground">© 2025 Все права защищены</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="MapPin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
