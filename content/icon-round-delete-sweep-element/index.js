import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDeleteSweepElement
 * @class IconRoundDeleteSweepElement
 * @extends {AoflElement}
 */
class IconRoundDeleteSweepElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDeleteSweepElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-delete-sweep';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDeleteSweepElement.is, IconRoundDeleteSweepElement);

export default IconRoundDeleteSweepElement;
