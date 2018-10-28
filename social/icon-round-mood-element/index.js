import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMoodElement
 * @class IconRoundMoodElement
 * @extends {AoflElement}
 */
class IconRoundMoodElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMoodElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-mood';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMoodElement.is, IconRoundMoodElement);

export default IconRoundMoodElement;
