import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLaunchElement
 * @class IconOutlineLaunchElement
 * @extends {AoflElement}
 */
class IconOutlineLaunchElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLaunchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-launch';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLaunchElement.is, IconOutlineLaunchElement);

export default IconOutlineLaunchElement;
