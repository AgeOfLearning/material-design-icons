import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMicNoneElement
 * @class IconOutlineMicNoneElement
 * @extends {AoflElement}
 */
class IconOutlineMicNoneElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMicNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-mic-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMicNoneElement.is, IconOutlineMicNoneElement);

export default IconOutlineMicNoneElement;
