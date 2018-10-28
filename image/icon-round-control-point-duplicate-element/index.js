import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundControlPointDuplicateElement
 * @class IconRoundControlPointDuplicateElement
 * @extends {AoflElement}
 */
class IconRoundControlPointDuplicateElement extends AoflElement {
  /**
   * Creates an instance of IconRoundControlPointDuplicateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-control-point-duplicate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundControlPointDuplicateElement.is, IconRoundControlPointDuplicateElement);

export default IconRoundControlPointDuplicateElement;
