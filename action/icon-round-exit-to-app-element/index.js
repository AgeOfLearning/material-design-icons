import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundExitToAppElement
 * @class IconRoundExitToAppElement
 * @extends {AoflElement}
 */
class IconRoundExitToAppElement extends AoflElement {
  /**
   * Creates an instance of IconRoundExitToAppElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-exit-to-app';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundExitToAppElement.is, IconRoundExitToAppElement);

export default IconRoundExitToAppElement;
