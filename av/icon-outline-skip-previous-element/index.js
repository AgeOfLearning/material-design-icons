import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSkipPreviousElement
 * @class IconOutlineSkipPreviousElement
 * @extends {AoflElement}
 */
class IconOutlineSkipPreviousElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSkipPreviousElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-skip-previous';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSkipPreviousElement.is, IconOutlineSkipPreviousElement);

export default IconOutlineSkipPreviousElement;
