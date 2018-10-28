import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSpaElement
 * @class IconRoundSpaElement
 * @extends {AoflElement}
 */
class IconRoundSpaElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSpaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-spa';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSpaElement.is, IconRoundSpaElement);

export default IconRoundSpaElement;
