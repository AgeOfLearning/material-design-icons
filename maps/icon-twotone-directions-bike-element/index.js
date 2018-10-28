import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDirectionsBikeElement
 * @class IconTwotoneDirectionsBikeElement
 * @extends {AoflElement}
 */
class IconTwotoneDirectionsBikeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDirectionsBikeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-directions-bike';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDirectionsBikeElement.is, IconTwotoneDirectionsBikeElement);

export default IconTwotoneDirectionsBikeElement;
