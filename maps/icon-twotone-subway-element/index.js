import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSubwayElement
 * @class IconTwotoneSubwayElement
 * @extends {AoflElement}
 */
class IconTwotoneSubwayElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSubwayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-subway';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSubwayElement.is, IconTwotoneSubwayElement);

export default IconTwotoneSubwayElement;
