import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPauseElement
 * @class IconRoundPauseElement
 * @extends {AoflElement}
 */
class IconRoundPauseElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPauseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-pause';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPauseElement.is, IconRoundPauseElement);

export default IconRoundPauseElement;
