import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBusinessCenterElement
 * @class IconRoundBusinessCenterElement
 * @extends {AoflElement}
 */
class IconRoundBusinessCenterElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBusinessCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-business-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBusinessCenterElement.is, IconRoundBusinessCenterElement);

export default IconRoundBusinessCenterElement;
