import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSwitchVideoElement
 * @class IconTwotoneSwitchVideoElement
 * @extends {AoflElement}
 */
class IconTwotoneSwitchVideoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSwitchVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-switch-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSwitchVideoElement.is, IconTwotoneSwitchVideoElement);

export default IconTwotoneSwitchVideoElement;
