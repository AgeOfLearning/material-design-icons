import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundOpenWithElement
 * @class IconRoundOpenWithElement
 * @extends {AoflElement}
 */
class IconRoundOpenWithElement extends AoflElement {
  /**
   * Creates an instance of IconRoundOpenWithElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-open-with';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundOpenWithElement.is, IconRoundOpenWithElement);

export default IconRoundOpenWithElement;
