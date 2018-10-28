import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDirectionsBusElement
 * @class IconTwotoneDirectionsBusElement
 * @extends {AoflElement}
 */
class IconTwotoneDirectionsBusElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDirectionsBusElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-directions-bus';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDirectionsBusElement.is, IconTwotoneDirectionsBusElement);

export default IconTwotoneDirectionsBusElement;
