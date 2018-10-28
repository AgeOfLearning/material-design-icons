import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundThumbDownElement
 * @class IconRoundThumbDownElement
 * @extends {AoflElement}
 */
class IconRoundThumbDownElement extends AoflElement {
  /**
   * Creates an instance of IconRoundThumbDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-thumb-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundThumbDownElement.is, IconRoundThumbDownElement);

export default IconRoundThumbDownElement;
