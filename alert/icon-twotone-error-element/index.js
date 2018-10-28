import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneErrorElement
 * @class IconTwotoneErrorElement
 * @extends {AoflElement}
 */
class IconTwotoneErrorElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneErrorElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-error';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneErrorElement.is, IconTwotoneErrorElement);

export default IconTwotoneErrorElement;
