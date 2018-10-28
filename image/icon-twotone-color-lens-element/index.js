import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneColorLensElement
 * @class IconTwotoneColorLensElement
 * @extends {AoflElement}
 */
class IconTwotoneColorLensElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneColorLensElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-color-lens';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneColorLensElement.is, IconTwotoneColorLensElement);

export default IconTwotoneColorLensElement;
