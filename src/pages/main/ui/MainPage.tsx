import { HomeIcon, Bell, Flame, TrendingUp, BookOpen, Star } from 'lucide-react';

import { Badge, Button, Card, Container, FloatingInput, Heading, Icon, Spinner, Text } from '@shared/ui';
import { useTheme } from '@shared/hooks';

export const MainPage = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="min-h-screen bg-[var(--color-bg)] py-8">
            <Container>
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <Heading level={1}>Компоненты</Heading>
                        <Text variant="secondary" size="sm">Shared UI kit</Text>
                    </div>
                    <Button variant="ghost" size="sm" onClick={toggleTheme}>
                        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                    </Button>
                </div>

                <div className="flex flex-col gap-6">

                    {/* Typography */}
                    <Card shadow>
                        <Text variant="muted" size="xs" className="mb-3 uppercase tracking-wider">Typography</Text>
                        <div className="flex flex-col gap-2">
                            <Heading level={1}>Heading 1</Heading>
                            <Heading level={2}>Heading 2</Heading>
                            <Heading level={3}>Heading 3</Heading>
                            <Heading level={4}>Heading 4</Heading>
                            <Text size="lg">Text large — основной текст</Text>
                            <Text size="base">Text base — обычный текст</Text>
                            <Text variant="secondary" size="sm">Text secondary small</Text>
                            <Text variant="muted" size="xs">Text muted extra small</Text>
                        </div>
                    </Card>

                    {/* Buttons */}
                    <Card shadow>
                        <Text variant="muted" size="xs" className="mb-3 uppercase tracking-wider">Buttons</Text>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-wrap gap-2">
                                <Button variant="primary">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="ghost">Ghost</Button>
                                <Button variant="outline">Outline</Button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Button size="sm">Small</Button>
                                <Button size="md">Medium</Button>
                                <Button size="lg">Large</Button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Button isLoading>Loading</Button>
                                <Button disabled>Disabled</Button>
                                <Button leftIcon={<Icon as={Bell} size={16} />}>С иконкой</Button>
                                <Button variant="outline" rightIcon={<Icon as={TrendingUp} size={16} />}>Вперёд</Button>
                            </div>
                        </div>
                    </Card>

                    {/* Floating Inputs */}
                    <Card shadow>
                        <Text variant="muted" size="xs" className="mb-3 uppercase tracking-wider">FloatingInput</Text>
                        <div className="flex flex-col gap-4">
                            <FloatingInput label="Логин" />
                            <FloatingInput label="Email" type="email" hint="example@mail.ru" />
                            <FloatingInput label="Пароль" type="password" error="Минимум 8 символов" />
                        </div>
                    </Card>

                    {/* Icons */}
                    <Card shadow>
                        <Text variant="muted" size="xs" className="mb-3 uppercase tracking-wider">Icon</Text>
                        <div className="flex flex-wrap gap-4 items-center">
                            <Icon as={HomeIcon} size={20} color="var(--color-primary)" />
                            <Icon as={Bell} size={20} color="var(--color-text-secondary)" />
                            <Icon as={Flame} size={24} color="var(--color-accent)" />
                            <Icon as={TrendingUp} size={24} color="var(--color-success)" />
                            <Icon as={BookOpen} size={28} color="var(--color-primary)" />
                            <Icon as={Star} size={28} color="var(--color-accent)" />
                        </div>
                    </Card>

                    {/* Badges */}
                    <Card shadow>
                        <Text variant="muted" size="xs" className="mb-3 uppercase tracking-wider">Badge</Text>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="primary">Primary</Badge>
                            <Badge variant="accent">Accent</Badge>
                            <Badge variant="success">Success</Badge>
                            <Badge variant="muted">Muted</Badge>
                            <Badge variant="primary">Tree Level 3</Badge>
                            <Badge variant="success">+12% this month</Badge>
                        </div>
                    </Card>

                    {/* Spinner */}
                    <Card shadow>
                        <Text variant="muted" size="xs" className="mb-3 uppercase tracking-wider">Spinner</Text>
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col items-center gap-1">
                                <Spinner size="sm" className="text-[var(--color-primary)]" />
                                <Text variant="muted" size="xs">sm</Text>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <Spinner size="md" className="text-[var(--color-primary)]" />
                                <Text variant="muted" size="xs">md</Text>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <Spinner size="lg" className="text-[var(--color-primary)]" />
                                <Text variant="muted" size="xs">lg</Text>
                            </div>
                        </div>
                    </Card>

                    {/* Card variants */}
                    <Card shadow>
                        <Text variant="muted" size="xs" className="mb-3 uppercase tracking-wider">Card</Text>
                        <div className="flex flex-col gap-3">
                            <Card padding="sm" className="border border-[var(--color-border)]">
                                <Text size="sm">Padding sm</Text>
                            </Card>
                            <Card padding="md" className="border border-[var(--color-border)]">
                                <Text size="sm">Padding md (default)</Text>
                            </Card>
                            <Card padding="lg" shadow className="border border-[var(--color-border)]">
                                <Text size="sm">Padding lg + shadow</Text>
                            </Card>
                            <Card padding="none" className="border border-[var(--color-border)]">
                                <Text size="sm" className="p-2">Padding none</Text>
                            </Card>
                        </div>
                    </Card>

                </div>
            </Container>
        </div>
    );
};
