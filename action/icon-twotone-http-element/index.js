import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHttpElement
 * @class IconTwotoneHttpElement
 * @extends {AoflElement}
 */
class IconTwotoneHttpElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHttpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-http';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHttpElement.is, IconTwotoneHttpElement);

export default IconTwotoneHttpElement;
