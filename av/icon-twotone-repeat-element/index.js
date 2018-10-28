import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRepeatElement
 * @class IconTwotoneRepeatElement
 * @extends {AoflElement}
 */
class IconTwotoneRepeatElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRepeatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-repeat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRepeatElement.is, IconTwotoneRepeatElement);

export default IconTwotoneRepeatElement;
