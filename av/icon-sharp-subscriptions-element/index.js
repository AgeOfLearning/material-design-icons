import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSubscriptionsElement
 * @class IconSharpSubscriptionsElement
 * @extends {AoflElement}
 */
class IconSharpSubscriptionsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSubscriptionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-subscriptions';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSubscriptionsElement.is, IconSharpSubscriptionsElement);

export default IconSharpSubscriptionsElement;
