import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLaunchElement
 * @class IconBaselineLaunchElement
 * @extends {AoflElement}
 */
class IconBaselineLaunchElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLaunchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-launch';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLaunchElement.is, IconBaselineLaunchElement);

export default IconBaselineLaunchElement;
