import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLockOpenElement
 * @class IconOutlineLockOpenElement
 * @extends {AoflElement}
 */
class IconOutlineLockOpenElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLockOpenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-lock-open';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLockOpenElement.is, IconOutlineLockOpenElement);

export default IconOutlineLockOpenElement;
