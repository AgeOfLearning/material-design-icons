import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSwitchVideoElement
 * @class IconBaselineSwitchVideoElement
 * @extends {AoflElement}
 */
class IconBaselineSwitchVideoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSwitchVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-switch-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSwitchVideoElement.is, IconBaselineSwitchVideoElement);

export default IconBaselineSwitchVideoElement;
