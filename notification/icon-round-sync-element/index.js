import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSyncElement
 * @class IconRoundSyncElement
 * @extends {AoflElement}
 */
class IconRoundSyncElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSyncElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-sync';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSyncElement.is, IconRoundSyncElement);

export default IconRoundSyncElement;
