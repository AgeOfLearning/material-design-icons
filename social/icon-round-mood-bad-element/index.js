import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMoodBadElement
 * @class IconRoundMoodBadElement
 * @extends {AoflElement}
 */
class IconRoundMoodBadElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMoodBadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-mood-bad';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMoodBadElement.is, IconRoundMoodBadElement);

export default IconRoundMoodBadElement;
