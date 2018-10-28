import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTrackChangesElement
 * @class IconRoundTrackChangesElement
 * @extends {AoflElement}
 */
class IconRoundTrackChangesElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTrackChangesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-track-changes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTrackChangesElement.is, IconRoundTrackChangesElement);

export default IconRoundTrackChangesElement;
