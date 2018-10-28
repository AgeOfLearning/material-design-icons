import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLaunchElement
 * @class IconTwotoneLaunchElement
 * @extends {AoflElement}
 */
class IconTwotoneLaunchElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLaunchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-launch';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLaunchElement.is, IconTwotoneLaunchElement);

export default IconTwotoneLaunchElement;
