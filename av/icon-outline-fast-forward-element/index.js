import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFastForwardElement
 * @class IconOutlineFastForwardElement
 * @extends {AoflElement}
 */
class IconOutlineFastForwardElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFastForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-fast-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFastForwardElement.is, IconOutlineFastForwardElement);

export default IconOutlineFastForwardElement;
