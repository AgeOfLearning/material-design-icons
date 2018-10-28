import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLiveHelpElement
 * @class IconRoundLiveHelpElement
 * @extends {AoflElement}
 */
class IconRoundLiveHelpElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLiveHelpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-live-help';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLiveHelpElement.is, IconRoundLiveHelpElement);

export default IconRoundLiveHelpElement;
