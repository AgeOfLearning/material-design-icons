import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStayPrimaryLandscapeElement
 * @class IconRoundStayPrimaryLandscapeElement
 * @extends {AoflElement}
 */
class IconRoundStayPrimaryLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStayPrimaryLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-stay-primary-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStayPrimaryLandscapeElement.is, IconRoundStayPrimaryLandscapeElement);

export default IconRoundStayPrimaryLandscapeElement;
