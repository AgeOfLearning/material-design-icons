import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMicElement
 * @class IconOutlineMicElement
 * @extends {AoflElement}
 */
class IconOutlineMicElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-mic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMicElement.is, IconOutlineMicElement);

export default IconOutlineMicElement;
