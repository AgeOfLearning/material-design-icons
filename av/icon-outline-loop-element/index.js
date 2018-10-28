import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLoopElement
 * @class IconOutlineLoopElement
 * @extends {AoflElement}
 */
class IconOutlineLoopElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLoopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-loop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLoopElement.is, IconOutlineLoopElement);

export default IconOutlineLoopElement;
