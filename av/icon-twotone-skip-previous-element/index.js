import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSkipPreviousElement
 * @class IconTwotoneSkipPreviousElement
 * @extends {AoflElement}
 */
class IconTwotoneSkipPreviousElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSkipPreviousElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-skip-previous';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSkipPreviousElement.is, IconTwotoneSkipPreviousElement);

export default IconTwotoneSkipPreviousElement;
