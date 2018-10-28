import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMapElement
 * @class IconTwotoneMapElement
 * @extends {AoflElement}
 */
class IconTwotoneMapElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMapElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-map';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMapElement.is, IconTwotoneMapElement);

export default IconTwotoneMapElement;
