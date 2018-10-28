import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSwitchVideoElement
 * @class IconOutlineSwitchVideoElement
 * @extends {AoflElement}
 */
class IconOutlineSwitchVideoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSwitchVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-switch-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSwitchVideoElement.is, IconOutlineSwitchVideoElement);

export default IconOutlineSwitchVideoElement;
