import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTuneElement
 * @class IconRoundTuneElement
 * @extends {AoflElement}
 */
class IconRoundTuneElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTuneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-tune';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTuneElement.is, IconRoundTuneElement);

export default IconRoundTuneElement;
