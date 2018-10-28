import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGpsFixedElement
 * @class IconRoundGpsFixedElement
 * @extends {AoflElement}
 */
class IconRoundGpsFixedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGpsFixedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-gps-fixed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGpsFixedElement.is, IconRoundGpsFixedElement);

export default IconRoundGpsFixedElement;
