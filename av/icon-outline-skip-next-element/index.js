import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSkipNextElement
 * @class IconOutlineSkipNextElement
 * @extends {AoflElement}
 */
class IconOutlineSkipNextElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSkipNextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-skip-next';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSkipNextElement.is, IconOutlineSkipNextElement);

export default IconOutlineSkipNextElement;
