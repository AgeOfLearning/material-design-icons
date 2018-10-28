import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLaunchElement
 * @class IconRoundLaunchElement
 * @extends {AoflElement}
 */
class IconRoundLaunchElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLaunchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-launch';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLaunchElement.is, IconRoundLaunchElement);

export default IconRoundLaunchElement;
