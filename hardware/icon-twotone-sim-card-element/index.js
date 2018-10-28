import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSimCardElement
 * @class IconTwotoneSimCardElement
 * @extends {AoflElement}
 */
class IconTwotoneSimCardElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSimCardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-sim-card';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSimCardElement.is, IconTwotoneSimCardElement);

export default IconTwotoneSimCardElement;
