import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSubscriptionsElement
 * @class IconTwotoneSubscriptionsElement
 * @extends {AoflElement}
 */
class IconTwotoneSubscriptionsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSubscriptionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-subscriptions';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSubscriptionsElement.is, IconTwotoneSubscriptionsElement);

export default IconTwotoneSubscriptionsElement;
