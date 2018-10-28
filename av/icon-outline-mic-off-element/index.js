import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMicOffElement
 * @class IconOutlineMicOffElement
 * @extends {AoflElement}
 */
class IconOutlineMicOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMicOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-mic-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMicOffElement.is, IconOutlineMicOffElement);

export default IconOutlineMicOffElement;
