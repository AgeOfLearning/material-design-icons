import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTuneElement
 * @class IconBaselineTuneElement
 * @extends {AoflElement}
 */
class IconBaselineTuneElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTuneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-tune';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTuneElement.is, IconBaselineTuneElement);

export default IconBaselineTuneElement;
