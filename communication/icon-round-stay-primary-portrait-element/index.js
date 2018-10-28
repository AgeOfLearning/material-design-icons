import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStayPrimaryPortraitElement
 * @class IconRoundStayPrimaryPortraitElement
 * @extends {AoflElement}
 */
class IconRoundStayPrimaryPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStayPrimaryPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-stay-primary-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStayPrimaryPortraitElement.is, IconRoundStayPrimaryPortraitElement);

export default IconRoundStayPrimaryPortraitElement;
