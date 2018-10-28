import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFastRewindElement
 * @class IconRoundFastRewindElement
 * @extends {AoflElement}
 */
class IconRoundFastRewindElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFastRewindElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-fast-rewind';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFastRewindElement.is, IconRoundFastRewindElement);

export default IconRoundFastRewindElement;
