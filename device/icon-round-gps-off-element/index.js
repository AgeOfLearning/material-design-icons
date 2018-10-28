import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGpsOffElement
 * @class IconRoundGpsOffElement
 * @extends {AoflElement}
 */
class IconRoundGpsOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGpsOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-gps-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGpsOffElement.is, IconRoundGpsOffElement);

export default IconRoundGpsOffElement;
