import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePolymerElement
 * @class IconTwotonePolymerElement
 * @extends {AoflElement}
 */
class IconTwotonePolymerElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePolymerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-polymer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePolymerElement.is, IconTwotonePolymerElement);

export default IconTwotonePolymerElement;
