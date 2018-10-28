import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHttpsElement
 * @class IconRoundHttpsElement
 * @extends {AoflElement}
 */
class IconRoundHttpsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHttpsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-https';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHttpsElement.is, IconRoundHttpsElement);

export default IconRoundHttpsElement;
